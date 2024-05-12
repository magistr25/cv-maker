import {Font, Page, Text, View, Document, StyleSheet, PDFViewer} from '@react-pdf/renderer';

// Загружаем шрифт
Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf'
});

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,

    },
    text: {
        fontFamily: 'Roboto',
    }
});

const PDFDocument = ({data}) => (

    <PDFViewer style={{width: '100%', height: '90vh'}}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>Ожидаемая позиция: {data.DesiredPosition}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Полное имя: {data.FullName}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Город: {data.City}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Образование: {data.Education}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Опыт работы: {data.Experience}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Ожидаемая зарплата: {data.ExpectedSalary}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Номер телефона: {data.PhoneNumber}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>email: {data.email}</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default PDFDocument;

