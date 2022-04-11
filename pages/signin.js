import {
  Checkbox,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  toast,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import md5 from "md5";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
const SignIn = () => {
  const router = useRouter();
  const toast = useToast();

  const [value, setValue] = useState("user");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Image
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <Text
            as="h2"
            color={useColorModeValue("gray.900", "gray.100")}
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
          >
            Sign in to your account
          </Text>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <Input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className=" mb-5">
              <Text className="sr-only">Email address</Text>
              <Input
                variant={"filled"}
                id="email-address"
                name="email"
                type="email"
                onChange={(e) => {
                  setemail(e.target.value.trim());
                }}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <Text className="sr-only">Password</Text>
              <Input
                variant={"filled"}
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => {
                  setpassword(e.target.value.trim());
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div className="flex  justify-start py-3">
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                  <Radio value="user">User</Radio>
                  <Radio value="seller">Seller</Radio>
                  <Radio value="admin">Admin</Radio>
                </Stack>
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                defaultChecked
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-7 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <Text
                color={useColorModeValue("gray.900", "gray.100")}
                as="p"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </Text>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={async (e) => {
                e.preventDefault();
                var enc = md5(password);

                if (value == "seller") {
                  console.log("login as seller");
                  const supabase = createClient(
                    "https://qvthtxoqqpjllkcfwmar.supabase.co",
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
                  );
                  var data = await supabase
                    .from("sellers")
                    .select("*")
                    .match({ email: email, password: enc })
                    .single();
                  console.log("data", data);
                  if (data.data == null) {
                    toast({
                      title: "Sign In",
                      description: "No account has found",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else if (data.data != null) {
                    if (data.data["state"] == "verified") {
                      console.log("yes");
                      toast({
                        title: "Sign In",
                        description: data.data["seller_id"],
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                      var seller_data = data.data;
                      var id = seller_data["seller_id"];

                      jsCookie.set("seller_uid", id);
                      jsCookie.set("seller_username", seller_data["username"]);
                      jsCookie.set("seller_profile", seller_data["profile"]);
                      jsCookie.set("seller_email", seller_data["email"]);
                      jsCookie.set(
                        "seller_contact_no",
                        seller_data["contact_no"]
                      );
                      jsCookie.set("state", "verified");
                      router.push(`/sellers/All_properties/${id}`);
                    } else {
                      toast({
                        title: "Sign In",
                        description: "Account has not been verified yet.",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                    }
                  } else {
                    toast({
                      title: "Sign In",
                      description: "Incorrect password",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                } else if (value == "admin") {
                  const supabase = createClient(
                    "https://qvthtxoqqpjllkcfwmar.supabase.co",
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
                  );
                  var data = await supabase
                    .from("admins")
                    .select("*")
                    .eq("email", email)
                    .single();
                  console.log("data", data);
                  if (data.data == null) {
                    toast({
                      title: "Sign In",
                      description: "No account has found",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else if (
                    data.data != null &&
                    data.data["password"] == enc
                  ) {
                    toast({
                      title: "Sign In",
                      description: "sucessfully sign in",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                    var admin_data = data.data;
                    jsCookie.set("admin_uid", admin_data["uid"]);
                    jsCookie.set("admin_username", admin_data["username"]);
                    jsCookie.set("admin_profile", admin_data["profile"]);
                    jsCookie.set("admin_email", admin_data["email"]);
                    jsCookie.set("admin_contact_no", admin_data["contact_no"]);
                    router.push(`/admins/All_properties/${admin_data["uid"]}`);
                  } else {
                    toast({
                      title: "Sign In",
                      description: "Incorrect password",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                } else {
                  console.log("sign in as user");
                   const supabase = createClient(
                    "https://qvthtxoqqpjllkcfwmar.supabase.co",
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
                  );
                  var data = await supabase
                    .from("users")
                    .select("*")
                    .match({ email: email, password: enc })
                    .single();
                  console.log("data", data);
                  if (data.data == null) {
                    toast({
                      title: "Sign In",
                      description: "No account has found",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else if (data.data != null) {
                   
                      console.log("yes");
                      toast({
                        title: "Sign In",
                        description: "Sign in Sucessfully",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                      var user_data = data.data;
                      var id = user_data["user_uid"];
                      console.log("id",id);
                      jsCookie.set("user_uid", id,{ path: '/' });
                      jsCookie.set("user_username", user_data["username"],{ path: '/' });
                      jsCookie.set("user_profile", user_data["profile"],{ path: '/' });
                      jsCookie.set("user_email", user_data["email"],{ path: '/' });
                      jsCookie.set(
                        "user_phone",
                        user_data["phone"],
                        { path: '/' }
                      );
                     
                      router.push('/');
                  
                  } else {
                    toast({
                      title: "Sign In",
                      description: "Incorrect password",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                }
              }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
