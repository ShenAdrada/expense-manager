import React from "react";
import { Divider, Grid } from 'semantic-ui-react';
import "./ExpenseList.css";

interface ExpenseListProps {
    expense: Expense;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({expense}) => {
    return (
        <div>
            <Grid columns={3} divided>
                <Grid.Row className="pt-30">
                    <Grid.Column>
                        {expense.category}
                    </Grid.Column>
                    <Grid.Column>
                        {expense.title}
                    </Grid.Column>
                    <Grid.Column>
                        {expense.value}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider fitted/>
            <br/>
        </div>
    );
}