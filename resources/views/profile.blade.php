<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="">
    <h1 class="text-center text-5xl mt-60 -mb-80">Kartu Identitas</h1>
    <div class="min-h-screen flex justify-center items-center gap-x-8 -mb-80">
        <div class="max-h-screen w-64 rounded-2xl bg-cyan-100 shadow-lg p-3">
                <div class="text-center font-semibold text-2xl border-t-0 border-r-0 border-l-0 border-4 border-b-cyan-900 pb-4 mb-6">
                    <p class="pb-1">{{$data->user->name}}</p>
                    <p class="text-xs text-gray-700 font-normal">{{$data->user->email}}</p>
                </div>
                <div class="text-gray-400 text-left text-xs">
                    <p>Nomor Handphone: <br>{{$data->no_hp}}</p>
                    <p class="mt-2">Alamat User: <br>{{$data->address}}</p>
                </div>
        </div>
        <div class="max-h-screen w-64 rounded-2xl bg-cyan-100 shadow-lg p-3">
            <div class="text-center font-semibold text-2xl border-t-0 border-r-0 border-l-0 border-4 border-b-cyan-900 pb-4 mb-6">
                <p class="pb-1">{{$data->user->name}}</p>
                <p class="text-xs text-gray-700 font-normal">{{$data->user->email}}</p>
            </div>
            <div class="text-gray-400 text-left text-xs">
                <p>Nomor Handphone: <br>{{$data->no_hp}}</p>
                <p class="mt-2">Alamat User: <br>{{$data->address}}</p>
            </div>
        </div>
        <div class="max-h-screen w-64 rounded-2xl bg-cyan-100 shadow-lg p-3">
            <div class="text-center font-semibold text-2xl border-t-0 border-r-0 border-l-0 border-4 border-b-cyan-900 pb-4 mb-6">
                <p class="pb-1">{{$data->user->name}}</p>
                <p class="text-xs text-gray-700 font-normal">{{$data->user->email}}</p>
            </div>
            <div class="text-gray-400 text-left text-xs">
                <p>Nomor Handphone: <br>{{$data->no_hp}}</p>
                <p class="mt-2">Alamat User: <br>{{$data->address}}</p>
            </div>
        </div>
        <div class="max-h-screen w-64 rounded-2xl bg-cyan-100 shadow-lg p-3">
            <div class="text-center font-semibold text-2xl border-t-0 border-r-0 border-l-0 border-4 border-b-cyan-900 pb-4 mb-6">
                <p class="pb-1">{{$data->user->name}}</p>
                <p class="text-xs text-gray-700 font-normal">{{$data->user->email}}</p>
            </div>
            <div class="text-gray-400 text-left text-xs">
                <p>Nomor Handphone: <br>{{$data->no_hp}}</p>
                <p class="mt-2">Alamat User: <br>{{$data->address}}</p>
            </div>
        </div>
    </div>
    <h1 class="text-center text-2xl">Jaga Kerahasiaan Data Pribadimu!</h1>
</body>
</html>
