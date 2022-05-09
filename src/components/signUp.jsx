import { Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const layout = {
    labelCol: {
      span: 9,
    },
    wrapperCol: {
      span: 6,
    },
  };

const SignUp = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        mobile: Yup.string()
          .required('mobile number is required')
      });

      const formik = useFormik({
        initialValues: {
          name: '',
          mobile: '',
         
        },
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (data) => {
          console.log(JSON.stringify(data, null, 2));
        },
      });
    


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
           <Form.Item style={{marginTop:"150px"}} wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>         <h3>SignUp</h3>
</Form.Item>

      <Form.Item
        label="Name"
        name="name"
      >
        <Input
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name} />
         
      </Form.Item>
      <div className="text-danger">
            {formik.errors.name
              ? formik.errors.name
              : null}
          </div>

      <Form.Item
        label="Mobile Number"
        name="mobile number"
      
      >
        <Input 
        name='mobile'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.mobile}/>
          
      </Form.Item>
      <div className="text-danger">
            {formik.errors.mobile
              ? formik.errors.mobile
              : null}
          </div>
    
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

export default SignUp;