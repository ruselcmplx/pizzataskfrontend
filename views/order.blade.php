@extends('layouts.app')

@section('content')
<div id="root">
   <script>
      let order_id = '{!! $order_id !!}';
      let current_order = '{!! $current_order !!}';
      let total_price = '{!! $total_price !!}';
      let user_phone = '{!! Auth::user()->phone !!}';
      let csrf_field = '{!! csrf_field() !!}';
   </script>
</div>
@endsection