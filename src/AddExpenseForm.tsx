import React, {useState, ChangeEvent, FormEvent} from "react";
import {Grid, Button} from 'semantic-ui-react';
import "./ExpenseList.css";

interface AddExpenseProps {
    addExpense: AddExpense;
}

export const AddExpenseForm: React.FC<AddExpenseProps> = ({ addExpense }) => {
    const [newExpense, setNewExpense] = useState("");
    const [newCategory, setnewCategory] = useState("");
    const [newValue, setnewValue] = useState("");


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewExpense(e.target.value)

    };
    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setnewCategory(e.target.value)

    };
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setnewValue(e.target.value)

    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addExpense(newExpense, newCategory, newValue)
    }
    return (
        <form>
            <Grid columns={3} divided>
                <Grid.Row className="pt-30">
                    <Grid.Column>
                        <input type="text" value={newCategory} onChange={handleChange}/>
                    </Grid.Column>
                    <Grid.Column>
                        <input type="text" value={newExpense} onChange={handleCategoryChange}/>
                    </Grid.Column>
                    <Grid.Column>
                        <input type="text" value={newValue} onChange={handleValueChange}/>
                        <Button className="mr-20" floated="right" type="submit" onClick={handleSubmit}>Add</Button>

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </form>

    );
};