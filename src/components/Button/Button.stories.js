import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["login", "logout"],
        }
    }
}

const Template = args => <Button {...args} />

export const LogIn = Template.bind({})
LogIn.args = {
    variant: "login",
    children: "Log In",
}

export const LogOut = Template.bind({})
LogOut.args = {
    variant: "logout",
    children: "Log Out",
}
