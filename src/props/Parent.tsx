import {Child,ChildAsFc} from './Child'

export const Parent = ({}) => {
    return <ChildAsFc color='blue' onClick={() => console.log('click')}>
        helooo
    </ChildAsFc>
}