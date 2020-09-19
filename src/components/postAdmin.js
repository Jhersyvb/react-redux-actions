import React, { Component } from 'react'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

class PostAdmin extends Component {
  state = {}

  render() {
    const { createPost } = this.props

    return (
      <form
        onSubmit={async e => {
          e.preventDefault()

          let image
          if (this.imageRef.files.length > 0) {
            const file = this.imageRef.files[0]
            image = await getBase64(file)
          }

          createPost({ image, content: this.textRef.value })

          this.textRef.value = ''
          this.imageRef.value = ''
        }}
      >
        <div className="card mb-3">
          <div className="card-header">Crear Publicación</div>
          <div className="card-body">
            <div className="clearfix border-bottom mb-2">
              <textarea
                ref={ref => (this.textRef = ref)}
                className="form-control nooutline"
                placeholder="Qué estás pensando?"
              />
              <label
                className="btn btn-secondary mx-0 my-2"
                htmlFor="photoFile"
              >
                Foto
              </label>
              <input
                ref={ref => (this.imageRef = ref)}
                type="file"
                className="form-control-file d-none"
                id="photoFile"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Publicar
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default PostAdmin
