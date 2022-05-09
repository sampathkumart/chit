import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd';

const layout = {
    labelCol: {
      span: 9,
    },
    wrapperCol: {
      span: 6,
    },
  };
  
const Chit = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span: 6,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    ><Form.Item  style={{marginTop:"50px"}} wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>         
    <h3>Seet</h3>
    </Form.Item>
      <Form.Item label="No.Of Seets">
        <Input />
      </Form.Item>
      <Form.Item label="Type">
        <Select>
          <Select.Option value="week">Weekly</Select.Option>          
          <Select.Option value="bi">Bi-Weekly</Select.Option>
          <Select.Option value="month">Monthly</Select.Option>
          <Select.Option value="two">2 Months</Select.Option>
          <Select.Option value="three">3 Months</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Start Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date">
        <Input />
      </Form.Item>
      <Form.Item  label="Amount">
        <Input />
      </Form.Item>
     
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
            <Button type="primary" >
            Submit
            </Button>
          </Form.Item>
      
    </Form>
  );
};

export default Chit;