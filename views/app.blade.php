<!DOCTYPE html>
<html>

<head>
   @yield('title')
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}">
   <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
</head>

<body>
   <div id="root"></div>
   <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
</body>

</html>