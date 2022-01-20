
<?php include "inc/header.php" ?>
       
<!--CONTACT FORM -->



 <section>
   <h1>Contact</h1>

        <form class="contact_form" method="GET" action="contact.php">
          <p>Firstname:<input name="firstname"  type="text" value ="<?php echo $firstname ?>" /> </p> <br>
            <p>Lastname:<input name="lastname"  type="text" value ="<?php echo $lastnamel ?>" /> </p> <br>
            <p>Email:<input name="email"  type="email" value = "<?php echo $email ?>"> </p> <br>
            <p>Message:<br><textarea name="textarea"  type="textarea" /></textarea> </p> <br>
          <p><input id="status" name="submit" type="button" value="Submit" /> </p>
        </form> 
     

  </section>
    
<!--FOOTER--> 
<?php include "inc/footer.php" ?> 

