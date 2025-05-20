import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  collection,
  doc,
  query,
  onSnapshot,
  updateDoc,
  where,
  writeBatch,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { db } from "@/configs/firebase.config";

interface Notification {
  id: string;
  createdAt: { seconds: number; nanoseconds: number };
  link: string;
  type: string;
  message: string;
  seen: boolean;
  projectId?: string;
}

interface NotificationContextType {
  notifications: Notification[];
  markAsSeen: (notificationId: string) => Promise<void>;
  hasNotification: (notificationType: string) => boolean;
  clearAllNotifications: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};

interface NotificationProviderProps {
  user: { uid: string };
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  user,
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (!user?.uid) return;

    const notificationsRef = query(
      collection(doc(db, "users", user.uid), "notifications"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(notificationsRef, (querySnapshot) => {
      const newNotificationsMap = new Map<string, Notification>();

      querySnapshot.forEach((doc) => {
        const notificationData = doc.data() as Omit<Notification, "id">;
        const notification: Notification = {
          id: doc.id,
          ...notificationData,
        };
        newNotificationsMap.set(notification.id, notification);
      });

      setNotifications((prevNotifications) => {
        const combinedNotifications = new Map(
          prevNotifications.map((n) => [n.id, n])
        );
        newNotificationsMap.forEach((value, key) => {
          combinedNotifications.set(key, value);
        });

        const sortedNotifications = Array.from(
          combinedNotifications.values()
        ).sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);

        return sortedNotifications;
      });
    });

    return () => unsubscribe();
  }, [user]);

  useEffect(() => {}, [notifications]);

  const markAsSeen = async (notificationId: string) => {
    const notificationDocRef = doc(
      db,
      "users",
      user.uid,
      "notifications",
      notificationId
    );
    await updateDoc(notificationDocRef, { seen: true });

    setNotifications((prevNotifications) =>
      prevNotifications.filter(
        (notification) => notification.id !== notificationId
      )
    );
  };

  const clearAllNotifications = async () => {
    const batch = writeBatch(db);
    const notificationsRef = collection(
      doc(db, "users", user.uid),
      "notifications"
    );
    const unseenNotificationsQuery = query(
      notificationsRef,
      where("seen", "==", false)
    );
    const querySnapshot = await getDocs(unseenNotificationsQuery);

    querySnapshot.forEach((doc) => {
      batch.update(doc.ref, { seen: true });
    });

    await batch.commit();

    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.seen !== false)
    );
  };

  const hasNotification = (notificationType: string): boolean =>
    notifications.some(
      (notification) =>
        notification.type === notificationType && !notification.seen
    );

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        markAsSeen,
        hasNotification,
        clearAllNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
