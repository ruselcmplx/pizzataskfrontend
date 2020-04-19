@extends('layouts.app')

@section('content')
<div id="root">
   <script>
      let current_order = '{!! $current_order !!}';
      let total_price = '{!! $total_price !!}';
   </script>
</div>
@endsection