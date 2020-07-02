import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page of East Bay View!</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  <div id="main" class="site-main">
        <div id="main-content" class="single-page-content">
          <div id="primary" class="content-area">
            <div id="content" class="page-content site-content" role="main">
              <article class="post">

                <div class="post-thumbnail">
                  <img src="images/blog/blog_post_5_full.jpg" alt="image">
                </div>

                <div class="post-content">
                  <!-- /Entry header -->
                  <header class="entry-header">
                    <!-- Entry meta -->
                    <div class="entry-meta entry-meta-top">
                      <span><a href="#" rel="category tag">UI</a></span>        
                    </div>
                    <!-- /Entry meta -->

                    <h2 class="entry-title">Best Practices for Animated Progress Indicators</h2>
                  </header>
                  <!-- /Entry header -->

                  <!-- Entry content -->
                  <div class="entry-content">
                    <div class="row">
                      <div class=" col-xs-12 col-sm-12 ">
                        <div class="col-inner">
                          <p>Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem.</p><p>Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.</p>
                          
                          <blockquote class="quote">Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut. In hac habitasse platea dictumst.
                            <footer class="quote-author">
                              <span>Larry L. Johnson</span>
                            </footer>
                          </blockquote>

                          <p>Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit amet semper purus tortor id ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum, auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus viverra consequat. Maecenas efficitur massa vel eros sagittis dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non massa felis.</p>

                          <p>Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis. Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed bibendum faucibus, semper a dui.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Entry content -->
    
                  <div class="entry-meta entry-meta-bottom">
                    <div class="date-author">
                      <span class="entry-date">
                        <a href="#" rel="bookmark">
                          <i class="far fa-clock"></i> <span class="entry-date"> April 6, 2018</span>
                        </a>
                      </span>
                      <span class="author vcard">
                        <a class="url fn n" href="#" rel="author"> <i class="fas fa-user"></i> Kerge</a>
                      </span>
                    </div>
      
                    <!-- Share Buttons -->
                    <div class="entry-share btn-group share-buttons">
                      <a href="#" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="btn" target="_blank" title="Share on Facebook">
                        <i class="fab fa-facebook"></i>
                      </a>
                      
                      <a href="#" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="btn" target="_blank" title="Share on Twitter">
                        <i class="fab fa-twitter"></i>
                      </a>
          
                      <a href="#" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="btn" title="Share on Google+">
                        <i class="fab fa-google-plus"></i>
                      </a>

                      <a href="#" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="btn" title="Share on LinkedIn">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </div>
                    <!-- /Share Buttons -->
                  </div>

                  <div class="post-tags">
                    <div class="tags">
                      <a href="#" rel="tag">animate</a>
                      <a href="https://lmpixels.com/wp/kerge-wp/tag/bar/" rel="tag">bar</a>
                      <a href="https://lmpixels.com/wp/kerge-wp/tag/design/" rel="tag">design</a>
                      <a href="https://lmpixels.com/wp/kerge-wp/tag/progress/" rel="tag">progress</a>
                      <a href="https://lmpixels.com/wp/kerge-wp/tag/ui/" rel="tag">ui</a>
                    </div>
                  </div>
                </div>
              </article>

              <nav class="navigation post-navigation clearfix">
                <div class="nav-links">
                  <a href="#" rel="prev"><span class="meta-nav"> Why I Switched to Sketch For UI Design</span></a>
                  <a href="#" rel="next"><span class="meta-nav"> 6 Easy Steps to Better Icon Design</span></a>
                </div>
              </nav><!-- .navigation -->
    
              <div id="comments" class="comments-area">
                <div id="respond" class="comment-respond">
                  <h3 id="reply-title" class="comment-reply-title">Leave a Comment</h3>

                  <form action="#" method="post" id="commentform" class="comment-form" novalidate="">
                    <div class="form-group form-group-with-icon comment-form-message">
                      <textarea id="comment" class="form-control" name="comment" placeholder="Your Comment" cols="45" rows="8" aria-required="true"></textarea>
                      <div class="form-control-border"></div>
                      <i class="form-control-icon fa fa-comment"></i>
                    </div>
                      
                    <div class="form-group form-group-with-icon comment-form-author">
                      <input id="author" class="form-control" name="author" type="text" placeholder="Your Name" value="" size="30" aria-required="true">
                      <div class="form-control-border"></div>
                      <i class="form-control-icon fa fa-user"></i>
                    </div>
                    
                    <div class="form-group form-group-with-icon comment-form-email">
                      <input id="email" class="form-control" name="email" type="text" placeholder="Your Email" value="" size="30" aria-required="true">
                      <div class="form-control-border"></div>
                      <i class="form-control-icon fa fa-envelope"></i>
                    </div>

                    <p class="form-submit">
                      <input name="submit" type="submit" id="submit" class="submit" value="Post Comment">
                    </p>
                  </form>
                </div>
              </div><!-- #comments -->
            </div><!-- #content -->
          </div>
        </div><!-- #primary -->
      </div>
  </Layout>
)

export default SecondPage
