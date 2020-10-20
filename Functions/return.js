function subject(maths, science, french) {
    let s = maths + science + french; 
    return s; 
  }
  
  function percentage(tt) {
    let per = tt / 300 * 100;
    console.log(per);
  }
  
  
  let total = subject(55, 65, 75);
  percentage(total);