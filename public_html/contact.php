<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="utf-8">
  <title>Lava | Designed By Theme Armada</title>
  <meta name="keywords" content="made with bootstrap, wrap bootstrap themes, bootstrap agency themes, creative bootstrap sites, Lava theme, responsive bootstrap theme, mobile website themes, bootstrap portfolio, theme armada">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width">
  
  <meta property="og:title" content="Lava | Designed By Theme Armada">
	<meta property="og:type" content="website">
	<meta property="og:url" content="http://www.themearmada.com/demos/lava">
	<meta property="og:site_name" content="Theme Armada">
	<meta property="og:description" content="made with bootstrap, wrap bootstrap themes, bootstrap agency themes, creative bootstrap sites, Lava theme, responsive bootstrap theme, mobile website themes, bootstrap portfolio, theme armada">

  <!-- Styles -->
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/animate.css">
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
  

  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/custom-styles.css">

  <script src="js/modernizr-2.6.2-respond-1.1.0.min.js"></script>

  <!-- Fav and touch icons -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72-precomposed.png">
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57-precomposed.png">
  <link rel="shortcut icon" href="/favicon.png">
</head>

<body>
        
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="index.html"><img src="img/logo.png" alt="logo"></a>
          <div class="nav-collapse collapse">
            <ul class="nav pull-right">
              <li><a href="index.html">Home</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages &amp; Features <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="full-width.html">Full Width</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="blog.html">Blog Loop</a></li>
                  <li><a href="blog-article.html">Blog Article</a></li>
                  <li><a href="login.html">Log In</a></li>
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="icons.html">Icons</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Work <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="3-column.html">3 Column</a></li>
                  <li><a href="4-column.html">4 Column</a></li>
                  <li><a href="individual-work.html">Individual Work</a></li>
                </ul>
              </li>
              <li><a href="blog.html">Blog</a></li>
              <li class="active"><a href="contact.php">Contact</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
      

    <!--Content-->
    <section id="page-title">
      <div class="container">
        <div class="row">
          <div class="span12 text-center">
            <h3>Get In Touch</h3>
          </div>
        </div>
      </div>
    </section>
    
    <!--Content-->      
    <section id="content2">
      <div class="container">
        <div class="row-fluid">
        
          <?php  

            // check for a successful form post  
            if (isset($_GET['s'])) echo "<div class=\"alert alert-success\">".$_GET['s']."</div>";  
      
            // check for a form error  
            elseif (isset($_GET['e'])) echo "<div class=\"alert alert-error\">".$_GET['e']."</div>";  
      
            ?>  
            
            <form method="POST" action="contact-form-submission.php">
                
                <div class="span4">
                  <div class="control-group">  
                    <div class="controls">  
                      <input type="text" class="input-block-level" name="contact_name" id="input1" placeholder="Your name">  
                    </div>  
                  </div>  
                  <div class="control-group">  
                    <div class="controls">  
                      <input type="text" class="input-block-level" name="contact_email" id="input2" placeholder="Your email address">  
                    </div>  
                  </div>
                  <div class="control-group">  
                    <div class="controls">  
                      <input type="text" class="input-block-level" name="contact_subject" id="input3" placeholder="Subject">  
                    </div>  
                  </div>
					       </div><!--End Span4-->
					       
					       <div class="span8">
                    <div class="control-group">  
                      <div class="controls">  
                        <textarea name="contact_message" id="input4" class="input-block-level" rows="8" placeholder="The message you want to send to me."></textarea>  
                      </div>  
                    </div>  
                    <div class="text-right">  
                      <input type="hidden" name="save" value="contact">  
                      <button type="submit" class="btn-main">Submit</button>  
                    </div>
					       </div><!--End Span8-->

					   </form>
        
        
        </div><!--End Row-->
      </div><!--End Container-->
    </section>
    
    
    <!--Map Section-->
    <section id="map">
    
      <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=atlanta&amp;aq=&amp;sll=32.678125,-83.178297&amp;sspn=8.89966,16.907959&amp;ie=UTF8&amp;hq=&amp;hnear=Atlanta,+Fulton,+Georgia&amp;t=m&amp;z=6&amp;iwloc=A&amp;output=embed"></iframe>
      
    </section>

       
    <!--Twitter Feed-->
    <section id="twitter">
      <div class="container">
        <div class="row">
          <div class="span12 text-center">
            <i class="icon-twitter icon-4x gray margin-20"></i>
              <div class="twitter-feed">
      					<ul id="twitter_update_list" class="rotate"></ul>
      				</div>
          </div>
        </div>
      </div>
    </section>
 
    
    <!--Bottom Section-->
    <section id="bottom">
      <div class="container">
        <div class="row margin-40">
          <div class="span10 offset1 text-center">
            <p>1234 Main Street Atlanta, GA 30305 | 404.555.5555  |  <a href="mailto:support@themearmada.com"><i class="icon-envelope-alt"></i> support@themearmada.com</a></p>
            <hr>
          </div>
        </div>
        
        <div class="row">
          <div class="span10 offset1 text-center">
            <!--Social Icons-->          
            <ul class="social-icons">
    					<li><a class="twitter" href="http://www.twitter.com/themearmada" target="_blank"><i class="icon-twitter icon-3x"></i></a></li>
    					<li><a class="facebook" href="http://www.facebook.com" target="_blank"><i class="icon-facebook icon-3x"></i></a></li>
    					<li><a class="google" href="http://www.googleplus.com" target="_blank"><i class="icon-google-plus icon-3x"></i></a></li>
    					<li><a class="instagram" href="http://www.instagram.com" target="_blank"><i class="icon-camera-retro icon-3x"></i></a></li>
    					<li><a class="pinterest" href="http://www.pinterest.com" target="_blank"><i class="icon-pinterest icon-3x"></i></a></li>
    					<li><a class="linkedin" href="http://www.linkedin.com" target="_blank"><i class="icon-linkedin icon-3x"></i></a></li>
    					<li><a class="Github" href="http://www.github.com" target="_blank"><i class="icon-github-alt icon-3x"></i></a></li>
    				</ul>
          </div>
        </div>
        
      </div>
    </section>
        
    
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="span12 text-center">
            <p>@ Copyright. All Rights Reserved. Created by <a href="http://www.themearmada.com">Theme Armada.</a></p>
          </div>
        </div>
      </div>
    </section>
      
    
    <!-- Javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.9.1.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/rotate.js"></script>
    <script src="js/twitter-feed.js"></script>
    <!--Twitter Handle - Insert your Twitter username below ex: (screen_name=USERNAME&include) -->
    <script src="http://api.twitter.com/1/statuses/user_timeline.json?screen_name=themearmada&amp;include_rts=true&amp;count=4&amp;callback=twitterCallback2" type="text/javascript"></script>
   
    </body>
</html>