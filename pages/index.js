import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const nav = () => {
    return (
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TSA Project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Work process</a>
        </li>
        <li class ="nav-item">
          <Link href = "/testing">
          <a class="nav-link" >Testimonials</a>
          </Link>
        </li>
        <li class ="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class ="nav-item">
          <Link href = "/Login">
          <a class="nav-link">login page</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
}

export default nav;
