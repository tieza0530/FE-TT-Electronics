"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb"
import { usePathname, useRouter } from "next/navigation"
import { getVietnamesePathname } from "@/app/components/convert/pathnames"

const formSchema = z.object({
  account: z.string(),
  password: z.string(),
})

export default function Login() {
  const route = useRouter()
  const pathname = usePathname();
  const segment = pathname.split('/').filter(Boolean)[0]
  const segmentVi = getVietnamesePathname(segment);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
      password: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }


  return (
    <div className="2xl:px-80 xl:px-16 h-full mt-10">
      <BreadCrumb param={segmentVi} />
      <div className="flex items-center justify-center">
        <div className="my-20 w-1/3 p-10  bg-neutral-100/50 rounded-sm shadow ">
          <p className="text-center text-3xl mb-10 font-semibold">Đăng nhập</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="account"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tài khoản</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập số điện thoại hoặc email" {...field} className="bg-white" title="Nhập số điện thoại hoặc email" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-1">
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập mật khẩu" {...field} className="bg-white" title="Nhập mật khẩu" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-xs flex justify-end text-gray-400 hover:underline cursor-pointer" title="Quên mật khẩu ?"> <span onClick={() => route.push('/forget-password')}>Quên mật khẩu?</span></div>
              <Button type="submit" className="w-full py-6 bg-(--color-main) hover:bg-main/60">Đăng nhập</Button>
              <div className="text-xs text-center  cursor-pointer">Bạn chưa có tài khoản ? <strong className=" hover:underline" onClick={() => route.push('/register')}>Đăng ký ngay</strong></div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}