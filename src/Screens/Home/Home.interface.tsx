import { WithTranslation } from 'react-i18next';

export namespace IHomePage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        home: {
            version: number;
        };
        image: {
            url: string;
        };
    }
}
