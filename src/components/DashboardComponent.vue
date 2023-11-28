<template>
    <div>
        <!--Main Navigation-->
        <header>
            <!-- Sidebar -->
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Home</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Explore</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                class="fas fa-lock fa-fw me-3"></i><span>Notifications</span></a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                class="fas fa-chart-line fa-fw me-3"></i><span>Messages</span></a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-chart-pie fa-fw me-3"></i><span>Lists</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                class="fas fa-chart-bar fa-fw me-3"></i><span>Communities</span></a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                class="fas fa-globe fa-fw me-3"></i><span>Premium</span></a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                class="fas fa-building fa-fw me-3"></i><span>Profile</span></a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                class="fas fa-calendar fa-fw me-3"></i><span>More</span></a>
                        <a href="#" class="btn btn-md list-group-item list-group-item-action py-2 ripple"><i
                                class="fas fa-users fa-fw me-3"></i><span><button>Posts</button></span></a>
                       
                    </div>
                </div>
            </nav>
            <!-- Sidebar -->

            <!-- Navbar -->
            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <!-- Container wrapper -->
                <div class="container-fluid">
                    <!-- Toggle button -->
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <!-- Brand -->
                    <a class="navbar-brand" href="#">
                        <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="25"
                            alt="MDB Logo" loading="lazy" />
                    </a>
                    <!-- Search form -->
                    <form class="d-none d-md-flex input-group w-auto my-auto">
                        <input autocomplete="off" type="search" class="form-control rounded"
                            placeholder='Search (ctrl + "/" to focus)' style="min-width: 225px;" />
                        <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
                    </form>

                    <!-- Right links -->
                    <ul class="navbar-nav ms-auto d-flex flex-row">
                        <!-- Notification dropdown -->
                        <li class="nav-item dropdown">
                            <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#"
                                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-bell"></i>
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>

                        <!-- Icon -->
                        <li class="nav-item">
                            <a class="nav-link me-3 me-lg-0" href="#">
                                <i class="fas fa-fill-drip"></i>
                            </a>
                        </li>
                        <!-- Icon -->
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="#">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>

                        <!-- Icon dropdown -->
                        <li class="nav-item dropdown">
                            <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown"
                                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="united kingdom flag m-0"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#"><i class="united kingdom flag"></i>English
                                        <i class="fa fa-check text-success ms-2"></i></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
                                </li>
                            </ul>
                        </li>

                        <!-- Avatar -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
                                    height="22" alt="Avatar" loading="lazy" />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- Container wrapper -->
            </nav>
            <!-- Navbar -->
        </header>
        <!--Main Navigation-->

        <!--Main layout-->
        <main style="margin-top: 58px;">
            <div class="container pt-4 shadow-sm mx-auto w-50 px-">
                <!-- <div class="shadow-sm mx-auto w-50 px-5"> -->
                <h3 class="text-muted text-center">Make a Post</h3>

                <form @submit.prevent="savePosts">
                    <!-- <label for="" class="d-block">Title</label>
                    <input type="text" name="title" placeholder="Post Title" v-model="v$.form.title.$model">
                    <div v-for="(error,index) in v$.form.title.$errors" :key="index">
                        <span class="text-danger text-sm">{{  error.$message }}</span>
                    </div> -->
                    <label for="exampleInputEmail" class="form-label"></label>
                    <textarea type="email" name="content" id="exampleInputEmail" class="form-control"
                        aria-describedby="emailHelp" cols="30" rows="10" placeholder="Write your post"
                        v-model="form.content"></textarea>

                    <div class="mt-2po">
                        <label class="fw-bold">Add Images</label>
                        <input type="file" class="form-control" @change="addImage" multiple>
                    </div>
                    <button class="btn  btn-sm btn-success" type="submit">Post</button>
                </form>
                <div class="col-md-4 col-20 w-50">
                    <div v-for="post in posts" :key="post.id">
                        <div v-for="image in post.images" :key="image">
                        <img class="image" :src="'http://localhost:8000/storage/' + image" v-if="post.image!==null" alt=""
                            id="image">
                        </div>
                        <div>{{ post.content }}</div>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </main>
        <!--Main layout-->


    </div>
</template>

<script>
import axios from 'axios';
import useValidate from '@vuelidate/core'


export default {
    beforeMount() {
        axios.get("http://localhost:8000/api/getPosts").then((res) => {
            // console.log(res.data);
            this.posts = res.data.posts
            console.log(this.posts)
        })
        console.log(localStorage.getItem('userId'))
    },

    setup() {
        return { v$: useValidate() }
    },
    data() {
        return {
            form: {
                content: '',
            },
            posts: [],
            images: [],
        }
    },

    // validations() {
    //     return {
    //         form: {
    //             content: { required, min: minLength(20), max: maxLength(500) },
    //         }
    //     }
    // },

    methods: {
        addImage(e) {
            this.images = e.target.files;
        },

        savePosts() {

            const formData = new FormData();
            formData.append('content', this.form.content);
            for (let index = 0; index < this.images.length; index++) {
                formData.append('images[]', this.images[index]);
            }
            formData.append('user_id', localStorage.getItem('userId'))
            axios.post("http://localhost:8000/api/savePosts", formData).then((res) => {
                console.log(res);
            })


        }
    },

} 
</script>

<style scoped>
body {
    background-color: #fbfbfb;
}

@media (min-width: 991.98px) {
    main {
        padding-left: 240px;
    }
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 58px 0 0;
    /* Height of navbar */
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    width: 240px;
    z-index: 600;
}

@media (max-width: 991.98px) {
    .sidebar {
        width: 100%;
    }
}

.sidebar .active {
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
}
</style>