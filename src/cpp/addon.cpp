#include <napi.h>
#include "add.hpp"

Napi::Value Add(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() < 2) {
        Napi::TypeError::New(env, "Wrong number of arguments")
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong arguments")
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    double a = info[0].As<Napi::Number>().DoubleValue();
    double b = info[1].As<Napi::Number>().DoubleValue();
    double result = add(a, b);

    return Napi::Number::New(env, result);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("add", Napi::Function::New(env, Add));
    return exports;
}

NODE_API_MODULE(native_addon, Init)
