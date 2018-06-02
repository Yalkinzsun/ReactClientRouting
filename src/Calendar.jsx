import React, { Component as C } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import Counter_2 from './Counter_2';
import moment from 'moment';

class Calendar extends C {
	constructor() {
		super();
		this.state = { Day: 1 };
	};
	render() {
		return (
			<div>
				<Counter_2 stars={this.state.Day} />
				<DatePicker
					onChange={(n = null, date) => {
						const Day = Number( moment(date).format('DD') );
						this.setState({ Day });
					}
				}
				floatingLabelText="Выберите дату!"
				/>
			</div>);
	};
};

export default Calendar;