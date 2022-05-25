import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1197 {
    static int[] parent;
    static PriorityQueue<pEdge> queue;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        queue = new PriorityQueue<>();
        parent = new int[N+1];

        for(int i=0;i<N;i++){
            parent[i] = i;
        }

        for(int i=0;i<M;i++){
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            queue.add(new pEdge(s, e, v));
        }
        int useEdge = 0;
        int result = 0;

        while(useEdge < N-1){
            pEdge now = queue.poll();
            if(find(now.s) != find(now.e)){
                union(now.s, now.e);
                result = result + now.v;
                useEdge++;
            }
        }
        System.out.println(result);
    }

    public static void union(int a, int b){
        a = find(a);
        b = find(b);
        if(a!=b){
            parent[b] = a;
        }
    }

    public static int find(int a){
        if(a == parent[a]){
            return a;
        }else{
            return parent[a] = find(parent[a]);
        }
    }
}
class pEdge implements Comparable<pEdge>{
    int s;
    int e;
    int v;
    pEdge(int s, int e, int v){
        this.s = s;
        this.e = e;
        this.v = v;
    }
    @Override
    public int compareTo(pEdge o) {
        return this.v - o.v;
    }
           
}
