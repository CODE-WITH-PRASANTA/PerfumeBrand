import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './BlogPosting.css';

const BlogPosting = () => {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    title: '',
    description: '',
    image: null,
    imagePreview: ''
  });

  // State to store submitted list items
  const [blogList, setBlogList] = useState([]);
  const editorRef = useRef(null);

  // Handle standard input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle TinyMCE editor changes
  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, description: content }));
  };

  // Handle Image File selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file) // Creates a local temporary URL for image display
      }));
    }
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add the new item to our list state
    const newBlogPost = {
      id: Date.now(),
      name: formData.name,
      date: formData.date,
      title: formData.title,
      description: formData.description,
      imagePreview: formData.imagePreview
    };

    setBlogList((prevList) => [...prevList, newBlogPost]);
    handleReset(); // Clear form after adding
  };

  // Reset Form
  const handleReset = () => {
    setFormData({
      name: '',
      date: '',
      title: '',
      description: '',
      image: null,
      imagePreview: ''
    });
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
  };

  return (
    <div className="blog-management-container">
      
      {/* LEFT SIDE: Form Panel (50%) */}
      <div className="blog-card-panel">
        <h2 className="panel-title">Add Blog Post</h2>
        <form onSubmit={handleSubmit} className="blog-form">
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <Editor
              apiKey="YOUR_TINY_MCE_API_KEY" // Optional: Replace with a free TinyMCE API key to remove warnings
              onInit={(evt, editor) => (editorRef.current = editor)}
              value={formData.description}
              onEditorChange={handleEditorChange}
              init={{
                height: 200,
                menubar: false,
                plugins: ['lists', 'link', 'wordcount'],
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
          </div>

          <div className="form-group full-width">
            <label>Upload Image</label>
            <div className="file-upload-wrapper">
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                required={!formData.imagePreview}
              />
              <label htmlFor="upload-image" className="custom-file-btn">
                Choose File
              </label>
              <span className="file-name-text">
                {formData.image ? formData.image.name : 'No file chosen'}
              </span>
            </div>
          </div>

          <div className="form-actions-group">
            <button type="submit" className="btn-action btn-primary-submit">Submit</button>
            <button type="button" className="btn-action btn-danger-reset" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE: Table List Panel (50%) */}
      <div className="blog-card-panel">
        <h2 className="panel-title">Blog Posts List</h2>
        <div className="table-responsive-wrapper">
          <table className="blog-data-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Date</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {blogList.length > 0 ? (
                blogList.map((post) => (
                  <tr key={post.id}>
                    <td>
                      {post.imagePreview && (
                        <img src={post.imagePreview} alt="Blog thumb" className="table-row-thumb" />
                      )}
                    </td>
                    <td><span className="text-wrap-cell">{post.name}</span></td>
                    <td><span className="text-wrap-cell date-cell">{post.date}</span></td>
                    <td><strong className="text-wrap-cell">{post.title}</strong></td>
                    <td>
                      {/* Safely inject html generated by TinyMCE */}
                      <div 
                        className="table-description-snippet"
                        dangerouslySetInnerHTML={{ __html: post.description }} 
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="table-empty-row">
                    No Blog Members Listed
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default BlogPosting;