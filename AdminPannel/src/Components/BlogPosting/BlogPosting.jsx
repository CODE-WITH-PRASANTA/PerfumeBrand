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

  // State to track if we are editing an item
  const [editingId, setEditingId] = useState(null);

  // State to store submitted list items
  const [blogList, setBlogList] = useState([]);
  
  // Refs for TinyMCE and File Input elements
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

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
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  // Form Submission (Handles both Add and Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing item smoothly
      setBlogList((prevList) =>
        prevList.map((post) =>
          post.id === editingId
            ? {
                ...post,
                name: formData.name,
                date: formData.date,
                title: formData.title,
                description: formData.description,
                imagePreview: formData.imagePreview,
                image: formData.image
              }
            : post
        )
      );
    } else {
      // Add a new item
      const newBlogPost = {
        id: Date.now(),
        name: formData.name,
        date: formData.date,
        title: formData.title,
        description: formData.description,
        imagePreview: formData.imagePreview,
        image: formData.image
      };
      setBlogList((prevList) => [...prevList, newBlogPost]);
    }

    handleReset(); // Clear form after adding/updating
  };

  // Trigger Edit Mode
  const handleEdit = (post) => {
    setEditingId(post.id);
    setFormData({
      name: post.name,
      date: post.date,
      title: post.title,
      description: post.description,
      image: post.image || null,
      imagePreview: post.imagePreview
    });
    if (editorRef.current) {
      editorRef.current.setContent(post.description);
    }
  };

  // Handle Smooth Delete Execution
  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents bubbling to row clicks
    
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setBlogList((prevList) => prevList.filter((post) => post.id !== id));
      
      // If we delete the row currently loaded in edit mode, reset the form panel
      if (editingId === id) {
        handleReset();
      }
    }
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
    setEditingId(null);
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Hard resets underlying DOM file selection
    }
  };

  return (
    <div className="blog-management-container">
      
      {/* LEFT SIDE: Form Panel (50%) */}
      <div className="blog-card-panel">
        <h2 className="panel-title">{editingId ? 'Edit Blog Post' : 'Add Blog Post'}</h2>
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
              apiKey="YOUR_TINY_MCE_API_KEY"
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
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                required={!formData.imagePreview}
              />
              <label htmlFor="upload-image" className="custom-file-btn">
                Choose File
              </label>
              <span className="file-name-text">
                {formData.image ? formData.image.name : formData.imagePreview ? 'Current Image Attached' : 'No file chosen'}
              </span>
            </div>
          </div>

          <div className="form-actions-group">
            <button type="submit" className={`btn-action ${editingId ? 'btn-success-update' : 'btn-primary-submit'}`}>
              {editingId ? 'Update Post' : 'Submit Post'}
            </button>
            <button type="button" className="btn-action btn-danger-reset" onClick={handleReset}>
              {editingId ? 'Cancel Edit' : 'Reset Form'}
            </button>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogList.length > 0 ? (
                blogList.map((post) => (
                  <tr key={post.id} className={editingId === post.id ? 'row-editing' : ''}>
                    <td>
                      {post.imagePreview && (
                        <img src={post.imagePreview} alt="Blog thumb" className="table-row-thumb" />
                      )}
                    </td>
                    <td><span className="text-wrap-cell">{post.name}</span></td>
                    <td><span className="text-wrap-cell date-cell">{post.date}</span></td>
                    <td><strong className="text-wrap-cell">{post.title}</strong></td>
                    <td>
                      <div 
                        className="table-description-snippet"
                        dangerouslySetInnerHTML={{ __html: post.description }} 
                      />
                    </td>
                    <td>
                      <div className="table-actions-container">
                        <button 
                          type="button" 
                          className="btn-table-action btn-edit" 
                          onClick={() => handleEdit(post)}
                        >
                          Edit
                        </button>
                        <button 
                          type="button" 
                          className="btn-table-action btn-delete" 
                          onClick={(e) => handleDelete(e, post.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="table-empty-row">
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