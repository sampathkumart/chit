import { Form, Input, Button, Checkbox } from 'antd';


const layout = {
    labelCol: {
      span: 9,
    },
    wrapperCol: {
      span: 6,
    },
  };

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span: 6,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
           <Form.Item  style={{marginTop:"150px"}} wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
               <h3>SignIn</h3>
</Form.Item>

      <Form.Item
        label="Mobile Number"
        name="mobile"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="OTP"
        name="otp"
      
      >
        <Input />
      </Form.Item>

    
      <Form.Item
         wrapperCol={{ ...layout.wrapperCol, offset: 11 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;