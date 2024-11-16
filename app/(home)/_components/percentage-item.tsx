import { ReactNode } from "react";


interface PercentageItemProps {
    icon: ReactNode;
    title: string,
    value: number,
}

const PercentageItem = ({icon,title,value}:PercentageItemProps) => {
    return ( 
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
        {icon}
            <p className="text-muted-foreground">{title}</p>
        </div>
        <p className="font-semibold">
          {value}%   
        </p>
        
    </div>
     );
}
 
export default PercentageItem;