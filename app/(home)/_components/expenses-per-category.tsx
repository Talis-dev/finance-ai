import { TotalExpensePerCategory } from "@/app/_actions/add-transactions/_data/get-dashboard/types";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_consants/transactions";


interface ExpensesPerCategoryProps {
    expensesPerCategory: TotalExpensePerCategory[]
}


const ExpensesPerCategory = ({expensesPerCategory}:ExpensesPerCategoryProps) => {
    return ( 
        <ScrollArea className="col-span-2 rounded-lg border pb-3 h-full ">
            <CardHeader>
                <CardTitle className="font-semibold">
                    Gastos por Categoria
                </CardTitle>
            </CardHeader>
            <CardContent>
                {expensesPerCategory.map(category => (
    <div key={category.category} className="space-y-2">
        <div className="flex justify-between w-full ">
      <p className="text-sm mt-4">{TRANSACTION_CATEGORY_LABELS[category.category]}</p>
      <p className="text-sm mt-4">{category.percentageOfTotal}%</p>
        </div>
        <Progress value={category.percentageOfTotal}/>



                    </div>

                ))}

            </CardContent>
        </ScrollArea>
     );
}
 
export default ExpensesPerCategory;