
<?php include "inc/header.php" ?>
       
<!--CONTACT FORM -->



 <section>

   <h1>Contact</h1>

        <form class="contact_form" method="post" action="">
          Firstname:<input name="firstname"  type="text"/> <br>
          Lastname:<input name="lastname"  type="text"/> <br>
          Email:<input name="email"  type="email"> <br>
          Message:<br><textarea name="textarea"  type="textarea"></textarea> <br>
          <input id="status" name="submit" type="button" value="Submit"/> 
        </form> 
     

  </section>

  <?php
      if($_POST){

      }


  ?>
    
<!--FOOTER--> 
<?php include "inc/footer.php" ?> 

