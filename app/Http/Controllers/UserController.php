<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    public function login(Request $request){
        $user = User::where('email',$request->email)->first();

        if($user){
            if(Hash::check($request->password,$user->password)){
                Session::put('customerId',$user->id);

                return response()->json($user);
            }
        }
        return response()->json('Error!');
    }

    public function logout(){
        Session::forget('customerId');
        Auth::logout();
        return redirect('/');
    }
}
