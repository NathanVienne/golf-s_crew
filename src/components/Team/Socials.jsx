import Icon from '@mdi/react';


export default function Social({ list }) {
    return (
        <a href={list.url} className='text-base-100 hover:text-accent'>
            <Icon path={list.platform} size={1} />
        </a>
    )
}