import React from 'react'
import { useMatch, useParams } from 'react-router-dom';
export default function Error() {
    const { id } = useParams()
    return (
        <div>Không tìm thấy trang {id}</div>
    )
}
