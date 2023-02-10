import axios from "axios"
import { BlogPostType, BlogPostCommentType, commentPostData } from "./types";

const baseURL = 'http://localhost:1337'

const host = axios.create({
    baseURL
});

export const getAllPosts = async () => {
    try {
        const { data } = await host<BlogPostType[]>('/posts?_sort=id&_order=desc');
        return data;
    } catch (error) {
        console.log('Newtwork error', error);
        throw error
    }
}

export const getPost = async (id: string) => {
    try {
        const { data } = await host<BlogPostType>(`/posts/${ id }`);
        return data;
    } catch (error) {
        console.log('Newtwork error', error);
        throw error
    }
}

export const getComments = async (id: string) => {
    try {
        const { data } = await host<BlogPostCommentType[]>(`/posts/${ id }/comments`);
        return data;
    } catch (error) {
        console.log('Newtwork error', error);
        throw error
    }
}

export const postComment = async (comment: commentPostData) => {
    try {
        const { data } = await host.post(`/comments`, comment);
        return data;
    } catch (error) {
        console.log('Newtwork error', error);
        throw error
    }
}