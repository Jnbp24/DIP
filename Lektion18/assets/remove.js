const removeButtons = document.querySelectorAll('.removeButton')
removeButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
        const filePath = event.currentTarget.getAttribute('data-file') // <-- get the path

        if (!confirm(`Are you sure you want to remove ${filePath}?`)) return
        try {
            const response = await fetch(`/${filePath}`, { method: 'DELETE' })
            if (response.ok) {
                alert(`${filePath} removed`)
                location.reload() // reload page to update the file list
            } else {
                const text = await response.text()
                alert(`Error: ${text}`)
            }
        } catch (err) {
            console.error(err)
            alert('Something went wrong')
        }
    })
})