import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './BlogPosting.css';

const BlogPosting = () => {
  // State to hold all form data
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    title: '',
    description: '',
  });

  const editorRef = useRef(null);

  // Handle standard input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle TinyMCE editor change
  const handleEditorChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      description: content,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Blog post submitted successfully! Check console for data.');
  };

  // Handle Reset
  const handleReset = () => {
    setFormData({
      name: '',
      date: '',
      title: '',
      description: '',
    });
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
  };

  return (
    <div className="blog-container">
      {/* LEFT SIDE: Form (50%) */}
      <div className="blog-form-section">
        <h2 className="section-title">Create Blog Post</h2>
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
              apiKey="YOUR_TINY_MCE_API_KEY_HERE" // Get a free key from TinyMCE website or leave blank for development warnings
              onInit={(evt, editor) => (editorRef.current = editor)}
              value={formData.description}
              onEditorChange={handleEditorChange}
              init={{
                height: 250,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-submit">Submit</button>
            <button type="button" className="btn btn-reset" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE: Live Preview (50%) */}
      <div className="blog-preview-section">
        <h2 className="section-title">Blog Preview</h2>
        <div className="preview-card">
          {formData.title || formData.name || formData.date || formData.description ? (
            <div className="preview-content">
              {formData.title && <h1 className="preview-title">{formData.title}</h1>}
              
              <div className="preview-meta">
                {formData.name && <span className="preview-author">By: {formData.name}</span>}
                {formData.date && <span className="preview-date">Published: {formData.date}</span>}
              </div>
              
              {formData.description && (
                <div 
                  className="preview-body"
                  dangerouslySetInnerHTML={{ __html: formData.description }} 
                />
              )}
            </div>
          ) : (
            <div className="no-data-message">
              No content to preview. Start filling out the form!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPosting;