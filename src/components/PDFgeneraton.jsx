import { Font, Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Загружаем шрифт
Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf'
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    text: {
        fontFamily: 'Roboto'
    }
});

const PDFDocument = () => (
    <PDFViewer style={{ width: '100%', height: '90vh' }}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>Привет мир!</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Данный текст на русском языке!</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default PDFDocument;
