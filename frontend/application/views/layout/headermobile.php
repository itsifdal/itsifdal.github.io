<header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <a class="logo" href="index.html">
                            <img src="<?php echo base_url(); ?>assets/images/icon/logo.png" alt="CoolAdmin" />
                        </a>
                        <button class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="navbar-mobile">
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">
                        <li>
                            <a href="<?php echo base_url('Ruangan')?>"><i class="fas fa-tachometer-alt"></i>Data Ruangan</a>
                        </li>
                        <li class="active">
                            <a href="<?php echo base_url('Booking')?>"><i class="fas fa-chart-bar"></i>Manage Booking</a>
                        </li>
                        <li>
                            <a href="<?php echo base_url('Login/logout')?>"><i class="fas fa-sign-out-alt "></i>Log Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>