
import { cn } from '@/lib/utils';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as React from "react";
const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitive.Root
        aria-setsize={4}
        ref={ref}
        className={cn(
            "w-[60px] h-[30px] shadow-md bg-slate-300 rounded-full data-[state=checked]:shadow-lg data-[state=checked]:bg-primary",
            className
        )}
        {...props}
    >
        <SwitchPrimitive.Thumb
            className='pointer-events-none w-[30px] h-[30px] transition-colors ease-in-out duration-200 block bg-white rounded-full tranxlate-x-[2px] duratin-150 data-[state=checked]:translate-x-[30px]'
        />
        {props.title && (
            <div className=" inset-0 flex items-center justify-center pointer-events-none">
                <span className=" font-medium" style={{ color: props?.title === 'Completed' ? 'green' : 'red' }}>
                    {props.title}</span>
            </div>
        )}
    </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
