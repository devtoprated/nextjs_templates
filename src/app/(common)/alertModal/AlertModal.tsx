import {
  AlertDialog as AlertDialogInterface,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CustomButton } from "@/components/ui/button";

interface AlertDialogInterface {
  onClick: () => void;
  modalCloseHandel: () => void;
  modalOpen: boolean;
  title: string;
  description?: string;
  btnText?: string;
}

const AlertModal = ({
  modalCloseHandel,
  modalOpen,
  onClick,
  title,
  description,
  btnText = "Delete",
}: AlertDialogInterface) => {
  return (
    <AlertDialogInterface open={modalOpen} onOpenChange={modalCloseHandel}>
      {/* <AlertDialogTrigger></AlertDialogTrigger> */}
      <AlertDialogContent className="backdrop-blur-xl bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <CustomButton onClick={modalCloseHandel} variant={"destructive"}>
            Cancel
          </CustomButton>
          <AlertDialogAction
            className="font-medium py-1 min-h-10"
            onClick={onClick}
          >
            {btnText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogInterface>
  );
};

export default AlertModal;
