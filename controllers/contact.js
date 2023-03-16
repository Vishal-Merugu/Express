exports.getContact = (req,res,next) => {
    res.render('contact-us',{
      pageTitle:"Contact Us",
      path : '/contact-us'
    });
  }
  
  exports.postSuccess = (req,res,next) =>{
    res.render('success',{
      pageTitle : "Contact Us",
      path : '/success'
    })
  }