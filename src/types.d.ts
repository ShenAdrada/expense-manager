type Expense = {
    title: string;
    date: Date;
    category:string;
    value:string;
}

type AddExpense = (newExpense:string, newCategory: string, newValue: string) => void;