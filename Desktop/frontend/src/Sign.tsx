import { Button } from "../@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../@/components/ui/card";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";
import { Bus } from "lucide-react";

export default function Sign() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-white p-10 rounded-xl shadow-xl transition-shadow hover:shadow-2xl">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-center mb-6">
            <Bus className="h-14 w-14 text-teal-500" />
          </div>
          <CardTitle className="text-3xl font-semibold text-center text-gray-800">Create an account</CardTitle>
          <CardDescription className="text-center text-gray-500">
            Enter your details below to create your account and start tracking buses.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="font-medium text-gray-700">Name</Label>
            <Input id="name" placeholder="John Doe" required className="border border-gray-300 rounded-md focus:border-teal-500 focus:ring-teal-500" />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="font-medium text-gray-700">Email</Label>
            <Input id="email" placeholder="john@example.com" required type="email" className="border border-gray-300 rounded-md focus:border-teal-500 focus:ring-teal-500" />
          </div>
          <div className="space-y-3">
            <Label htmlFor="password" className="font-medium text-gray-700">Password</Label>
            <Input id="password" required type="password" className="border border-gray-300 rounded-md focus:border-teal-500 focus:ring-teal-500" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-5">
          <Button className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition-all duration-200">
            Sign Up
          </Button>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-teal-500 hover:underline font-medium transition-all duration-200">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
