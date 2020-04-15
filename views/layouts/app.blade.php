<!DOCTYPE html>
<html>

<head>
   @yield('title')
   <!-- CSRF Token -->
   <meta name="csrf-token" content="{{ csrf_token() }}">

   <meta name="viewport" content="width=device-width, initial-scale=1">

   <link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}">

   <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
</head>

<body>
   <div>
      <nav class="navbar navbar-expand-md navbar-light navbar-laravel row justify-content-center">
         <ul class="navbar-nav mt-2 mb-2">
            <li class="nav-item">
               <a class="nav-link" href="{{ route('home') }}">Home</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="{{ route('menu') }}">Menu</a>
            </li>
            @guest
            <li class="nav-item">
               <a class="nav-link" href="{{ route('login') }}">Login</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="{{ route('register') }}">Register</a>
            </li>
            @else
            <li class="nav-item">
               {{ Auth::user()->name }} <span class=""></span>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                  {{ __('Logout') }}
               </a>
            </li>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
               @csrf
            </form>
            @endguest
         </ul>
      </nav>

      <main>
         @yield('content')
      </main>
   </div>
   <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
</body>

</html>