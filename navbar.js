function navbar(){
    
        return `
                 <div class="nav">
            <div class="logodiv">
                <a href="index.html"><img src="images/myntra-1200x900.webp" height="100%" width="100%"></a>
            </div>
            <div class="nav2">
                <div class="navbuttons">
                    <a href="mens.html"><button class="btnnav">MEN</button></a>
                </div>
                <div class="navbuttons">
                    <a href="womens.html"><button class="btnnav">WOMEN</button></a>
                </div>
                <div class="navbuttons">
                    <a href="#"><button class="btnnav">KIDS</button></a>
                </div>
                <div class="navbuttons">
                    <a href="#"><button class="btnnav">HOME & LIVING</button></a>
                </div>
                <div class="navbuttons">
                    <a href="#"><button class="btnnav">BEAUTY</button></a>
                </div>
                <div class="navbuttons">
                    <a href="#"><button class="btnnav">STUDIO</button></a>
                </div>
            </div>
        </div>

        <!-- search bar right align -->
        <div class="search">
            <!-- <form action="#"> -->
                <input type="text" placeholder="Search for products, brands and more" name="search">
                <button>
                    <i class="fa fa-search"></i>
                </button>
            <!-- </form> -->
        </div>
        <!-- search bar right align -->

        <div class="menu">
            <i class="fa-solid fa-bars"></i>

        </div>

        <div class="logo2">

            <div class="dropdown">
                <a href="#"><button class="dropbtn"><i class="fa-regular fa-user"></i><br>Profile</button></a>

                <!-- <div class="dropdown"> -->
                    <!-- <button class="dropbtn">Dropdown
                        <i class="fa fa-caret-down"></i>
                    </button> -->
                    <div class="dropdown-content">
                        <a href="#" id="profilename">Guest</a>
                        <a href="login.html">login</a>
                        <a href="registration.html">registration</a>
                        <a href="#" onclick="logout()">logout</a>
                    </div>
                <!-- </div> -->
            </div>
            <div class="navbuttons">
                <a href="index.html"><button class="btnnav"><i class="fa-regular fa-heart"></i><br>Wishlist</button></a>
            </div>
            <div class="navbuttons">
                <a href="index.html"><button class="btnnav"><i class="fa-solid fa-bag-shopping"></i><br>Bag</button></a>
            </div>

        </div>
    `
}

export default navbar