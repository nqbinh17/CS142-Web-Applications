'use strict';

class DatePicker{
    constructor(id,callback) {     
        this.id=id;
        this.callback=callback;
    }
    render(date){
        this.date=date;
        this.createCalendar();
    }
    createCalendar(){
        //Create + get Element
        var parent=document.getElementById(this.id);
        var Calendar=document.createElement("div");
        var Month=document.createElement("div");
        var day_of_week=document.createElement("div");
        var date_grid=document.createElement("div");
        // Construct HTML file
        Calendar.appendChild(Month);
        Calendar.appendChild(day_of_week);
        Calendar.appendChild(date_grid);
        parent.appendChild(Calendar);
        // Set className
        Calendar.id="calendar";
        Month.id="month-indicator";
        day_of_week.id="day-of-week";
        date_grid.id="date-grid";
        // Code for div day_of_week
        var day=["Su","Mo", "Tu","We","Th","Fr","Sa"];
        for(let i of day){
            let aa=document.createElement("div");
            aa.innerHTML=i;
            day_of_week.appendChild(aa);
        }
        // Code for div Month
        var hash=new Array();
        hash[0] = "January";
        hash[1] = "February";
        hash[2] = "March";
        hash[3] = "April";
        hash[4] = "May";
        hash[5] = "June";
        hash[6] = "July";
        hash[7] = "August";
        hash[8] = "September";
        hash[9] = "October";
        hash[10] = "November";
        hash[11] = "December";
        Month.innerHTML=hash[this.date.getMonth()]+` ${this.date.getFullYear()}`;
        // Code for div date_grid

        for(let i=1;i<=this.findDayOfMonth();i++){
            let ddiv=document.createElement("BUTTON");
            ddiv.innerHTML=i;
            date_grid.appendChild(ddiv);
            if(i==1){
                let new_date=new Date(`${this.date.getMonth()+1}`+"/1/"+`${this.date.getFullYear()}`);
                ddiv.style.gridColumn=new_date.getDay()+1;
            }
            
        }
    }
    findDayOfMonth(){
        return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
    }
}