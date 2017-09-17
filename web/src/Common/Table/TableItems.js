import Component from 'inferno-component';
import EmptyMessage from './EmptyMessage';
import DeleteButton from './DeleteButton';

export default class TableItems extends Component {

    renderHeader() {
        return this
            .props
            .header
            .map(head => (
                <th>
                    {head}
                </th>
            ));
    }

    renderBody() {
        return this
            .props
            .listData
            .map((data, index) => (
                <tr key={index}>
                    {
                        Object
                            .keys(data)
                            .map(key => (
                                <td>{data[key]}</td>
                            ))
                    }
                    <DeleteButton onDelete={() => this.props.onDelete(data, index)}>
                    </DeleteButton>
                </tr>
            ))
    }

    render() {
        return (
            <div>
                {
                    this
                        .props
                        .listData
                        .length
                        ?
                        <table className="responsive-table striped" >
                            <thead>
                                <tr>
                                    {
                                        this.renderHeader()
                                    }
                                    <th>Opções</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.renderBody()
                                }
                            </tbody>
                        </table >
                        :
                        <EmptyMessage></EmptyMessage>
                }
            </div>
        );
    }
}