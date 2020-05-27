import React from "react";
import { ExpenseList } from "./ExpenseList";
import { Container, Segment, Grid, Label, Divider } from 'semantic-ui-react';
import "./ExpenseList.css";

interface ExpenseProps {
    expenses:  Array<Expense>
}

export const Expenses: React.FC<ExpenseProps> = ({expenses}) => {
    return (
        <div>
            <div className="header">
                <Container textAlign='center'>
                    <h2>Expense Manager</h2>
                </Container>
            </div>
            <Segment>
                <Grid columns={3} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <Label textAlign='center' size='large'>Category</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label textAlign='center' size='large'>Title</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label textAlign='center' size='large'>Value</Label>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider fitted/>
                    {expenses.map(expense => {
                        return <ExpenseList key={expense.title} expense={expense}/>
                    })}
            </Segment>
        </div>
    );
};