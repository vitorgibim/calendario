function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.



  function createDaysDec() {
    const decDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const decDaysListItems = document.querySelector('#days');

    for (let index = 0; index < decDays.length; index++) {
      const days = decDays[index];
      const dayDecListItem = document.createElement('li');
      dayDecListItem.innerHTML = days;
      dayDecListItem.className = 'days';

      decDaysListItems.appendChild(dayDecListItem);  

      const holidayDays = ['24', '25', '26', '31'];
      for(let index = 0; index < holidayDays.length; index++){
        if (dayDecListItem.innerText == (holidayDays[index])) {
          dayDecListItem.className += ' holiday';
        }
      }

      const fridayDay = ['4', '11', '18', '25'];
      for(let index = 0; index < fridayDay.length; index++){
          if (dayDecListItem.innerText == (fridayDay[index])) {
            dayDecListItem.className += ' friday';
          }
      }

    };

  };

  createDaysDec(); 

  function createHolidayButton(holidayDays){
    const holidayButton = document.querySelector('.buttons-container');

    const holidayButtonItem = document.createElement('button');
    holidayButtonItem.innerHTML = 'Feriados';
    holidayButton.id = 'btn-holiday';

    holidayButton.appendChild(holidayButtonItem);
  }

  createHolidayButton();


 

      
