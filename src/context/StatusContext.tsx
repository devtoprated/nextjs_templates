"use client";
import { USER_ROLE } from "@/components/adddMember/AddMember.constant";
import { db } from "@/configs/firebase.config";
import { setLocalValue } from "@/utilities/localStorage.utils";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";



export enum ProjectStatusEnum {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SOLD = "SOLD",
    DEAL = "DEAL",
}

export enum ProjectOwnerTypeEnum {
    BROKER = "BROKER",
    PERSONAL = "PERSONAL",
    TEAM = "TEAM",
}

export enum UserStatusEnum {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

interface StatusState {
    isActive: boolean;
    projectStatus: ProjectStatusEnum;
    userStatus: UserStatusEnum;
    isUserAnonymous: boolean;
    isUserAddProperty: boolean;
    userRole: USER_ROLE;
    selectedProjectOwnerType: ProjectOwnerTypeEnum;
    errorMessage: string;
    handleSetProjectId: (id: string) => void;
    selectedOwnerId: string;
    handleSetSelectedOwnerId: (id: string) => void;
    ownerType: ProjectOwnerTypeEnum;
    selectedBrokerId: string;
    setBrokerId: (id: string) => void;
    handleSetSelectedOwnerType: (type: ProjectOwnerTypeEnum) => void;
}

const StatusContext = createContext<StatusState | null>(null);

export const useStatus = () => {
    const context = useContext(StatusContext);
    if (!context) {
        throw new Error("useStatus must be used within a StatusProvider");
    }
    return context;
};

interface ProviderProps {
    userDetails: any;
    children: React.ReactNode;
}

export const StatusProvider: React.FC<ProviderProps> = ({
    userDetails,
    children,
}) => {
    const [projectId, setProjectId] = useState<string | null>(null);
    const handleSetProjectId = (id: string) => {
        setProjectId(id);
        if (id.length === 0) {
            setSelectedProjectOwnerType(ProjectOwnerTypeEnum.PERSONAL);
        }
    };
    const [selectedProjectOwnerType, setSelectedProjectOwnerType] =
        useState<ProjectOwnerTypeEnum>(ProjectOwnerTypeEnum.PERSONAL);
    const [projectStatus, setProjectStatus] = useState<ProjectStatusEnum>(
        ProjectStatusEnum.INACTIVE
    );
    const [userStatus, setUserStatus] = useState<UserStatusEnum>(
        UserStatusEnum.INACTIVE
    );
    const [isUserAnonymous, setIsUserAnonymous] = useState<boolean>(false);
    const [isUserAddProperty, setIsUserAddProperty] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<USER_ROLE>(USER_ROLE.OTHER);

    const [selectedOwnerId, setSelectedOwnerId] = useState<string>("");
    const handleSetSelectedOwnerId = (id: string) => {
        setLocalValue("selectedOwnerId", id);
        setSelectedOwnerId(id);
    };

    const [ownerType, setOwnerType] = useState<ProjectOwnerTypeEnum>(
        ProjectOwnerTypeEnum.PERSONAL
    );
    const handleSetSelectedOwnerType = (type: ProjectOwnerTypeEnum) => {
        setOwnerType(type);
    };

    const [selectedBrokerId, setBrokerId] = useState<string>("");

    const userId = userDetails?.uid;

    useEffect(() => {
        if (!projectId || !userId) return;
        const projectQuery = query(
            collection(db, "projects"),
            where("__name__", "==", projectId)
        );

        const userProjectQuery = query(
            collection(db, "user_projects"),
            where("userId", "==", userId),
            where("projectId", "==", projectId)
        );

        const unSubProj = onSnapshot(projectQuery, (snapshot) => {
            let snapData = snapshot.docs[0]?.data();
            let snapProjStatus = snapData?.status;
            let snapOwnerType = snapData?.ownerType;
            setProjectStatus(snapProjStatus ?? ProjectStatusEnum.INACTIVE);
            setSelectedProjectOwnerType(
                snapOwnerType ?? ProjectOwnerTypeEnum.PERSONAL
            );
        });

        const unSubUser = onSnapshot(userProjectQuery, (snapshot) => {
            let snapUserStatus = snapshot.docs[0]?.data()?.status;
            let snapUserRole = snapshot.docs[0]?.data()?.role;
            setUserStatus(snapUserStatus ?? UserStatusEnum.INACTIVE);
            let snapUserAnonymous = snapshot.docs[0]?.data()?.isAnonymous;
            let snapUserAddProperty = snapshot.docs[0]?.data()?.isAddProperty;

            setIsUserAnonymous(snapUserAnonymous ?? false);
            setIsUserAddProperty(snapUserAddProperty ?? false);
            setUserRole(snapUserRole ?? USER_ROLE.OTHER);
        });

        return () => {
            unSubProj();
            unSubUser();
        };
    }, [projectId, userId]);

    const providerValue = {
        isActive:
            projectStatus === ProjectStatusEnum.ACTIVE &&
            userStatus === UserStatusEnum.ACTIVE,
        projectStatus,
        selectedProjectOwnerType,
        userStatus,
        userRole,
        errorMessage:
            projectStatus === ProjectStatusEnum.DEAL
                ? "Project can't be edited as deal fell through"
                : projectStatus === ProjectStatusEnum.INACTIVE
                    ? "Project is inactive"
                    : projectStatus === ProjectStatusEnum.SOLD
                        ? "Project is sold"
                        : userStatus === UserStatusEnum.INACTIVE
                            ? "You can't edit this project"
                            : "",
        handleSetProjectId,
        selectedOwnerId,
        handleSetSelectedOwnerId,
        ownerType,
        handleSetSelectedOwnerType,
        isUserAnonymous,
        isUserAddProperty,
        setBrokerId,
        selectedBrokerId,
    };

    return (
        <StatusContext.Provider value={providerValue}>
            {children}
        </StatusContext.Provider>
    );
};
