import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage, avatarVariants } from "./avatar";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const avatarStackVariants = cva("flex", {
  variants: {
    variant: {
      default: "gap-1",
      stack: "hover:space-x-1.5 -space-x-2.5 rtl:space-x-reverse",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AvatarStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<VariantProps<typeof avatarVariants>, `size`>,
    VariantProps<typeof avatarStackVariants> {
  id: string;
  avatars: { url?: string; name: string }[];
  maxAvatarsAmount?: number;
}

function AvatarStack({
  id,
  className,
  avatars,
  variant,
  size,
  maxAvatarsAmount = 4,
  ...props
}: AvatarStackProps) {
  const limitedAvatars = avatars.slice(0, maxAvatarsAmount);
  return (
    <div className={cn(avatarStackVariants({ variant }), className)} {...props}>
      {limitedAvatars.slice(0, maxAvatarsAmount).map((avatar, index) => (
        <TooltipProvider key={`${id}-${index}`}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar size={size}>
                <AvatarImage src={avatar.url} />
                <AvatarFallback className="bg-indigo-500 text-white">
                  {avatar.name
                    .split(" ")
                    .reduce((acc, subName) => acc + subName[0], "")}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{avatar.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      {limitedAvatars.length < avatars.length && (
        <Avatar size={size}>
          <AvatarFallback className="text-primary">
            +{avatars.length - limitedAvatars.length}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

export { AvatarStack };
