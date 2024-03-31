import React from 'react'
import {Form} from 'antd'
import {useDispatch, useSelector}from 'react-redux'
import {ShowLoading,HideLoading} from "../..//redux/rootSlice"
import axios from 'axios';
import {message} from 'antd'

function AdminAbout() {

const dispatch=useDispatch();
const {portfolioData}=useSelector((state)=>state.root);

const onFinish=async(values)=>{
    try{
      const tempSkills=values.skills.split(",");
      values.skills=tempSkills;
        dispatch(ShowLoading())
        const response=await axios.post(
            // '/api/portfolio/update-about'
            `${process.env.REACT_APP_BACKEND_URL}/api/portfolio/update-about`
            ,{
            ...values,
            _id:portfolioData.about._id
        });
        dispatch(HideLoading());
        if(response.data.success){
            message.success(response.data.message)
        }
        else{
            dispatch(HideLoading());
            message.error(response.data.message)
        }
    }catch(error){
        message.error(error.message)
    }
}

  return (
    <div>
        <Form onFinish={onFinish} layout='vertical' initialValues={{
          ...portfolioData.about,
          skills:portfolioData.about.skills.join(" , "),
        }}>
            <Form.Item name="lottieUrl" label="Lottie Url">
                <input placeholder='Lottie Url' />
            </Form.Item>
           
            <Form.Item name="description1" label="Description1">
                <textarea placeholder='Description1' />
            </Form.Item>
            <Form.Item name="description2" label="Description2">
                <textarea placeholder='Description2' />
            </Form.Item>
            <Form.Item name="skills" label="Skills">
                <textarea placeholder='Skills' />
            </Form.Item>
            <div className='flex justify-end w-full'>
                <button className='px-10 py-2 bg-primary text-white ' type='submit'>SAVE</button>
            </div>
        </Form>
    </div>
  )
}

export default AdminAbout