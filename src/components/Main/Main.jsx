import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './styles'

const Main = () => {
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<CardHeader title='Expense Tracker' subheader='created by davidsalomon' />
			<CardContent>
				<Typography aling='center' variant='h5'>Total balance $100</Typography>
				<Typography variant='subtitle1' style={{ lineHeigh: '1.5em', marginTop: '2rem' }}>
					Try saying: Add income for $100 in Category Salary for Monday
				</Typography>
				<Divider />
			</CardContent>
			<CardContent className={classes.cardContent}>
				<Grid container spacing={2}>
					<Grid item xs={12}>

					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

export default Main
