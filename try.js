function changecolor() {
    setInterval(changeit, 1000);
  }
  
  function changeit() {
    const randome_clrCode = Math.floor(Math.random() * 0xfff * 10000).toString(16);

    console.log(`#${randome_clrCode}`)
  }
  changecolor()
//   document.querySelector('#start').addEventListener('click', changecolor);
  